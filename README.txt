HONEY’S BIRTHDAY WEBSITE — PINK + RED ENVELOPE EDITION

START HERE
1. Open index.html locally to preview.
2. The entrance asks for code 0810.
3. Correct code opens the envelope and reveals the home page.
4. Click “A bouquet for Honey” on the home page to animate the roses.
5. Use the top menu for the birthday letter, For You cards, little notes, and apology.

PHOTOS
Put your own images in assets/photos/ using these exact filenames:
honey-1.jpg, honey-2.jpg, honey-3.jpg, honey-4.jpg
Photos are NOT included. See assets/photos/PUT_YOUR_PHOTOS_HERE.txt.

EDITING
index.html — landing page, birthday envelope wording, bouquet message.
wishes.html — birthday letter.
things.html — 7 personal cards.
moments.html — little notes.
sorry.html — final apology.
style.css — colors, layout, animations (see bottom for new features).
script.js — interactions and visit tracking.

VISIT TRACKING — IMPORTANT
The site contains a Netlify Forms definition named visit-events in index.html.
When deployed on Netlify with Forms enabled, it attempts to record:
  unlocked / birthday-envelope
  page-open / index.html, wishes.html, things.html, moments.html, sorry.html, privacy.html
  bouquet-opened / birthday-roses
View these in Netlify dashboard > Forms > visit-events (naming may vary).
After first deployment, verify the form is detected and submit a test visit.
Netlify's Forms limits, pricing, spam filtering and availability depend on your plan.
Events are not real-time presence indicators, and may be delayed or blocked.
The code 0810 is visible in website source code; it is a playful gate, not secure authentication.
The site does not send the code, name, or fingerprint in tracking events.
privacy.html discloses visit counting.

PUBLISH
1. Extract the ZIP and open the folder.
2. Go to https://app.netlify.com/drop and upload the whole folder.
3. Copy the .netlify.app link.
4. In Netlify dashboard check Forms / form detection and test your visit.
5. Redeploy the folder to update.

NOTE: Tracking cannot function by opening local index.html directly.
