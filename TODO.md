# TODO

## Code review checklist

### Build blockers
- [ ] Fix the Nodemailer TypeScript overload/type mismatch
- [ ] Verify all imported components match their expected prop types
- [ ] Check for any invalid JSX/TS syntax in pages and components
- [ ] Confirm all route files use the correct runtime for Node APIs
- [ ] Run a full type check and fix any `TS2769` / overload errors
- [ ] Ensure `rateLimit` returns the same type the caller expects

### Runtime bugs
- [ ] Fix `rateLimit` so blocked requests are actually blocked
- [ ] Validate SMTP host, port, secure mode, and auth together
- [ ] Confirm the email send route handles `null` / missing env values safely
- [ ] Check envelope/from/to addresses for SMTP compatibility
- [ ] Verify the contact form POST request handles non-200 responses correctly
- [ ] Make sure error handling returns useful but not overly detailed messages in production

### UX issues
- [ ] Display the contact form status message in the UI
- [ ] Disable the submit button while sending
- [ ] Add loading/error/success states with clear visual feedback
- [ ] Replace empty `href=""` links with real destinations or buttons
- [ ] Fix broken or awkward copy on the homepage
- [ ] Improve form validation messages for users

### Code quality / cleanup
- [ ] Remove duplicated project card markup by using a data array
- [ ] Clean up typos like `gird-cols-1`
- [ ] Standardize formatting and indentation across files
- [ ] Remove unnecessary type assertions where possible
- [ ] Simplify logic that can be expressed more directly
- [ ] Review shared components for overly complex prop unions

### Security / safety
- [ ] Keep server-only secrets out of client components
- [ ] Escape or sanitize all user-generated content before inserting into HTML
- [ ] Rate-limit the contact endpoint with a correct enforcement mechanism
- [ ] Confirm contact form inputs have reasonable length limits
- [ ] Make sure production error responses do not expose sensitive details

### Validation/testing
- [ ] Test successful contact form submission end-to-end
- [ ] Test invalid email, empty fields, and oversized message cases
- [ ] Test SMTP failure scenarios: bad credentials, timeout, wrong port
- [ ] Test rate limiting by submitting multiple requests quickly
- [ ] Run a production build and confirm it passes cleanly
- [ ] Test the app on both desktop and mobile layouts

## Fix in order

1. **Type/build blockers**
    - Resolve TypeScript overload/type errors
    - Fix component prop/type mismatches
    - Run build and type-check again

2. **Runtime bugs**
    - Fix `rateLimit` return behavior
    - Verify SMTP config and email sending
    - Confirm error handling is correct

3. **Core UX**
    - Show form status messages
    - Add loading/disabled submit states
    - Improve feedback after submission

4. **Layout/content cleanup**
    - Fix typos and broken copy
    - Replace placeholder links
    - Reduce duplicated markup

5. **Polish and testing**
    - Review shared components
    - Tighten validation
    - Test on desktop/mobile
    - Re-run production build