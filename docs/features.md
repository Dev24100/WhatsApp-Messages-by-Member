# Feature Specifications — WhatsApp Messages by Member

This document outlines the detailed feature specifications for the **Messages by Member** concept.

---

## 1. Feature Entry Points

To ensure effortless discoverability without adding clutter to the primary chat interface, two native entry points are proposed:

### Entry Point A: Group Info Screen (Primary)
* **Location:** Inside the Group Details view (`Group Info`), placed immediately adjacent to the existing `Media, links and docs` row.
* **Visual Treatment:** Accompanied by a dedicated icon (e.g., search/profile hybrid) and a subtle **"New"** badge to guide first-time discovery.
* **Behavior:** Tapping this row transitions directly into participant selection for the current group.

### Entry Point B: In-Chat Search Menu (Secondary)
* **Location:** Inside the search filter options bar within the active chat window.
* **Behavior:** Allows quick activation without navigating away from the chat screen.

---

## 2. Participant Search & Selection

Once the feature is opened, the user is presented with a list of group participants:

* **Scope:** Restricted exclusively to members of the current group.
* **Real-Time Search Bar:**
  * Supports filtering by **Contact Name** (saved address book name or push name).
  * Supports filtering by **Role** (e.g., Teacher, Admin, Student).
  * Supports filtering by **Phone Number** (matches raw digits or international formatting, e.g., `+91 98201 55412`).
* **Active Status & Avatars:** Clean initials or contact avatar display alongside confirmation checkmarks for the selected member.
* **Quick Access:** (Concept feature) Quick filter chip for `Frequently active` or `Admins`.

---

## 3. Two Filtering Modes

Users can tailor their view depending on whether they need conversational context or file attachments:

### Mode A: All Messages
* **Target:** Users seeking announcements, links, textual remarks, instructions, or full conversation snippets.
* **Included Types:**
  * Plain text and rich-text messages
  * Document attachments (PDFs, DOCX, XLSX, PPTX)
  * Photos, screenshots, and graphics
  * Video clips
  * Voice notes and audio recordings
  * Web links and rich URL previews
  * Shared contacts and location pins

### Mode B: Documents & Media
* **Target:** Users seeking solely reference documents, worksheets, slides, or visual media.
* **Included Types:**
  * Document files (PDF, Word, Excel, PowerPoint, plain text)
  * Media files (Images, illustrations, diagrams, video files)
* **Excluded Types:** Casual text chatter and standalone voice notes.
* **Sub-Category Filter Chips (Visual Reference Concept):**
  * `All` · `PDF` · `Images` · `Videos` · `Documents`

---

## 4. Sorting & Ordering

* **Newest First (Default):** Surfaces the most recent communications first, ideal for catching up on recent assignments or announcements.
* **Oldest First:** Chronological progression starting from the beginning of the participant's messages within the group, ideal for reviewing a sequence of lessons or onboarding materials.

---

## 5. Jump to Original Message Context ("Open in Chat")

Viewing filtered messages in isolation is useful for discovery, but users often need the surrounding conversational context to understand replies and reactions.

* **Action:** Tapping on any filtered message card or the "Open ↗" action triggers a smooth transition back to the main chat view.
* **Visual Focus:** The chat automatically scrolls to the target message, temporarily highlighting it with an animated pulse.
* **Return Banner:** A subtle sticky banner at the bottom (`Opened from "Messages by Member" — Tap to return`) allows users to return directly to their filtered list without losing their search state.

---

## 6. Optional & Future Enhancements

As illustrated in the visual reference board:

1. **Date Range Filtering:**
   * Preset options: `All time`, `Last 7 days`, `Last 30 days`, `Last 3 months`.
   * Custom date range picker: Define specific start and end dates.
2. **Multi-Platform Support (WhatsApp Web & Desktop):**
   * Responsive 3-column layout:
     - Left pane: Chat list
     - Center pane: Member selection and filter settings
     - Right pane: Filtered message results stream
