const requests = new Map<string, { count: number; firstRequest: number }>();

const rateLimit = (limit: number, intervalMs: number, key: string) => {
    const now= Date.now();
    const existing = requests.get(key);

    if (!existing || now - existing.firstRequest > intervalMs) {
        requests.set(key, { count: 1, firstRequest: now });
        return { allowed: true };
    }

    const nextCount = existing.count + 1;
    requests.set(key, { count: nextCount, firstRequest: existing.firstRequest });

    if (nextCount > limit) {
        return { allowed: false };
    }
    return { allowed: true };
}

export default rateLimit;