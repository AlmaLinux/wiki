---
title: "Managing events.almalinux.org"
---

# Managing events.almalinux.org

###### last updated: May 8, 2024

Our events are managed using [Indico](https://getindico.io/), the open source software created and developed at CERN. Our install, at [events.almalinux.org](https://events.almalinux.org) (documentation at [learn.getindico.io](https://learn.getindico.io/)), is kept up to date by the AlmaLinux Infra SIG, but events on it are managed by the marketing SIG. This document helps us consistently create new events to the community.

# Creating different events

When creating different types of events, it's important that you follow the directions below so that our community can count on events being presented in a consistent way.

All events should start as unlisted events to be published after they're reviewed by the marketing SIG chair.

## Webinars

1. Navigate to the Webinars event group.
1. Create a '**Lecture**' type event from the top of the page.
1. Enter the title of the webinar, ensure the time and date are correct, and click 'Advanced' to add a description.
   1. If you need to edit the event after it's created, you can.
1. Add speakers - you will have to manually enter anyone who is not already registered in Indico. (note for benny: if they register later, what happens?)

After it's created, there are some more adjustments to make:

1. under **Protection**, enable public registration and click _Save_
1. under **Organisation - > Participants** set the visibility to the default of "Show only consenting participants" and click save, so that the registration form will be displayed.
1. If you're opening registration immediately, make sure you click _Start now_ to open registrations.
1. Edit the form as needed by clicking _Configure_ next to 'Registration Form'
1. under **Organisation - > Reminders** add a reminder relative to the event start time at 1 hour offset from the event, sent to all participants and all speakers, sent from 'noreply@almalinux.org', including the event description and a link to where the webinar will be hosted.

## SIG meetings

1. Navigate to to the [SIGs category](https://events.almalinux.org/category/1/manage/), and choose the appropriate category there for the specific SIG.
1. Create a **meeting** event, naming it appropriately for the SIG using [$freqency - $signame meeting] as the pattern (for example, Bi-weekly Marketing SIG meeting).
1. Once created, on the default settings page update the **Contact title** and **Email** to match the SIG in question's contact details.
1. Under \*_Timetable_ click _Add new_ and _Contribution_
1. use the same title as for the full event, in the description add details about the event (general agenda, where they meet, and where to get the meeting link at least).
1. Put in the time of the meeting.
1. No speakers should be set for these meetings.

Leave the rest of it blank.

If a schedule is set for meetings already, clone the meeting you just created to make more of them. If not, you can clone older events to set up new meetings as we move forward.

## SIG Categories

1. Navigate in the admin interface to the [SIG category](https://events.almalinux.org/category/1/manage/)
1. Ensure the name of the category includes the name of the SIG and the word SIG
1. Use this template as the description:
   > These meetings are held every week via $platform. If you'd like the meeting link, join the $channelname channel on chat.almalinux.org.
   > For more information on this SIG, see the details on the AlmaLinux Wiki: $wikipage
1. Set the **"Theme for Lectures"** to lectures, and the **"Theme for Meetings"** to _Indico style_.
1. Add an icon and SIG logo created using the [Canva template](https://www.canva.com/design/DAGEBQ_hwpk/meDfUVoUTVoyYIY1-hXaJA/edit).
