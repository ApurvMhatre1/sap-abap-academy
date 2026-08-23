
# SAP ABAP Academy — Student + Admin Portal

A working single-page prototype for an SAP ABAP certification practice portal.

## Included
- Student login with name + email
- Admin tab
- 100 questions based on the supplied syllabus
- 120-minute mock test
- Question palette + mark for review
- Score/pass-fail + answer explanations
- Student attempt history
- Admin dashboard
- Student list
- Question bank add/edit/delete
- Results table + CSV export
- Supabase schema/RLS for shared multi-device use
- Demo mode that works immediately

## Run now
Open `index.html`.

Demo admin:
- Email: admin@example.com
- Password: admin123

Demo mode stores data in browser localStorage, so it is only for testing the UI.

## Make it a real multi-student portal
1. Create a Supabase project.
2. Run `supabase.sql` in SQL Editor.
3. Run `seed_questions.sql`.
4. Create an admin user in Supabase Authentication.
5. Promote it:
   `update public.profiles set role='admin' where email='YOUR_ADMIN_EMAIL';`
6. Put your Supabase URL and anon key into `app.js`:
   `SUPABASE_URL: "https://YOUR_PROJECT.supabase.co"`
   `SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY"`
7. Configure Supabase Auth redirect/site URL to your deployed portal URL.
8. Deploy the folder to a static host.

Do NOT put a Supabase service-role key in browser code.

## Production hardening
For a formal assessment, add server-side timing, attempt locking, audit logs, stronger admin controls, randomized question selection and anti-cheating controls.
