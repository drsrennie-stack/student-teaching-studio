# Accessibility compliance notes: chalkcast

## 1. Project, files, date

- Project: chalkcast (student whiteboard recording studio)
- File covered: `teaching-studio.html` (student flow and Instructor setup)
- Date: November 21, 2026
- Target: WCAG 2.2 Level AA, with AAA contrast where achievable

## 2. WCAG 2.2 status by criterion

Status words: Meets, Partly meets, Does not meet, Not tested.

| Criterion | Level | Status | Notes |
|---|---|---|---|
| 1.1.1 Non-text content | A | Partly meets | Icons, logo and decorative art are hidden from assistive technology or labeled. What a student draws on the whiteboard has no text alternative. |
| 1.2.1 to 1.2.5 Captions and audio description | A, AA | Does not meet | Student videos have no captions or transcript. See section 6. |
| 1.3.1 Info and relationships | A | Meets | Landmarks, one h1 per screen, labels tied to inputs, fieldsets with legends in Instructor setup. |
| 1.3.2 Meaningful sequence | A | Meets | Reading and focus order follow the visual order. |
| 1.4.1 Use of color | A | Meets | Recording state is shown in words ("Recording", "Not recording") as well as color. |
| 1.4.3 Contrast, minimum | AA | Meets | See section 3. |
| 1.4.6 Contrast, enhanced | AAA | Partly meets | Two pairs fall between 4.5 and 7. See section 3. |
| 1.4.4 Resize text | AA | Not tested | |
| 1.4.10 Reflow | AA | Partly meets | Layout adapts below 820 px. The whiteboard itself needs width and has not been tested at 320 px. |
| 1.4.11 Non-text contrast | AA | Meets | Button outlines and focus rings are white, gold or terra cotta on near-black, or navy on white. |
| 1.4.12 Text spacing | AA | Not tested | |
| 2.1.1 Keyboard | A | Partly meets | Every button, menu and field works by keyboard. Typed text can be placed on the board by keyboard. Freehand drawing, shapes, the Move tool and placing text at a chosen spot need a pointer. |
| 2.1.2 No keyboard trap | A | Meets | Verified by tabbing through every screen. |
| 2.2.1 Timing adjustable | A | Partly meets | The recording time limit is set by the instructor and cannot be extended by the student. Status notices disappear after 6 seconds. |
| 2.3.1 Three flashes | A | Meets | No flashing content. |
| 2.3.3 Animation from interactions | AAA | Meets | All motion is turned off when the device asks for reduced motion. |
| 2.4.1 Bypass blocks | A | Meets | Skip link at the top of the page. |
| 2.4.2 Page titled | A | Meets | |
| 2.4.3 Focus order | A | Meets | See section 4. |
| 2.4.6 Headings and labels | AA | Meets | |
| 2.4.7 Focus visible | AA | Meets | Gold ring on dark screens, terra cotta ring on white cards. |
| 2.5.7 Dragging movements | AA | Does not meet | Drawing and shapes require dragging. Typed text is the only non-drag way to add content. |
| 2.5.8 Target size, minimum | AA | Meets | Smallest targets are the color swatches at 34 px. |
| 3.1.1 Language of page | A | Meets | `lang="en"`. |
| 3.2.1, 3.2.2 On focus, on input | A | Meets | |
| 3.3.1 Error identification | A | Meets | Missing problem and missing camera or microphone are named in text. |
| 3.3.2 Labels or instructions | A | Meets | |
| 4.1.2 Name, role, value | A | Meets | Toggle buttons use `aria-pressed`. Icon buttons have accessible names. |
| 4.1.3 Status messages | AA | Meets | Notices use a polite live region. |

## 3. Color contrast audit

Ratios were calculated from the hex values in the file. AA needs 4.5 for normal text and 3 for large text. AAA needs 7 and 4.5.

| Text and background | Colors | Ratio | AA | AAA |
|---|---|---|---|---|
| White text on page background | #FFFFFF on #070A15 | 19.8 | Pass | Pass |
| Gold labels and phrases on page background | #D9B45A on #070A15 | 10.0 | Pass | Pass |
| Terra cotta "whiteboard" on page background (large text) | #C2734D on #070A15 | 5.5 | Pass | Pass |
| Navy text on white cards | #070A15 on #FFFFFF | 19.8 | Pass | Pass |
| Terra cotta labels and numerals on white cards | #8B3A2E on #FFFFFF | 7.7 | Pass | Pass |
| White text on terra cotta buttons | #FFFFFF on #8B3A2E | 7.7 | Pass | Pass |
| White text on red Recording button | #FFFFFF on #B3261E | 6.5 | Pass | Fail |
| Navy text on gold not-recording banner | #070A15 on #D9B45A | 10.0 | Pass | Pass |
| Navy "Start" on the paint drop, mid tone (large text) | #070A15 on #D9B45A | 10.0 | Pass | Pass |
| Navy "Start" on the paint drop, darkest edge (large text) | #070A15 on #AD8530 | 5.8 | Pass | Pass |
| Navy text on instruction preview | #070A15 on #F2F3F6 | 17.8 | Pass | Pass |
| Terra cotta link on instruction preview | #8B3A2E on #F2F3F6 | 6.9 | Pass | Fail |

Disabled buttons are shown at reduced opacity and are exempt.

Light view (the switch in the top bar): text is navy #070A15 on white (19.8) or terra cotta #8B3A2E on white (7.7). Gold is used only for decoration and for the not-recording banner with navy text (10.0). The light view was checked by eye on the opening, step 1 and whiteboard screens, and was not otherwise re-audited.

## 4. Keyboard navigation flow verified

Checked in desktop Chrome by pressing Tab and Enter only.

- Opening: skip link, then Start.
- Step 1: focus moves to the heading, then the problem box, then Next.
- Step 2: Turn on camera and mic, Back, Go to the whiteboard.
- Whiteboard: Record, Change problem, Time limit, Add a page, Zoom in, Undo, Clear this page, Add a picture, the nine tools, the five colors, Size, the whiteboard, then the rubric checkboxes.
- With the Text tool chosen and focus on the whiteboard, Enter opens a text box, typing adds text, Enter places it.
- Step 4: each download screen in order, with focus moved to the screen heading.

## 5. Screen reader testing

None performed. No screen reader was available for this review. The markup was checked by reading the code only.

## 6. Known limitations and remediation plan

| Limitation | Plan |
|---|---|
| No captions or transcript on student videos | Not solved. Speech-to-text built into browsers sends audio to an outside service, which breaks the privacy rule. An on-device option needs a large download and has not been built. Until then, caption any video that is shown to a class using the college's captioning service. |
| Freehand drawing and shapes need a mouse, finger or stylus | Typed text works by keyboard. Students who cannot use a pointer need an alternative way to complete the assignment through the instructor and DSPS. |
| The whiteboard PDF is a set of images with no text layer | Add real text for typed items and the rubric page in a later version. |
| The time limit cannot be extended by the student | Add an extended-time setting to the instructor link. |
| Not tested with a screen reader, on iPad, in Safari, or at 200 percent zoom | Test before the tool is offered for sale. |

## 7. Reviewer

Claude (automated checks in desktop Chrome and code review). Not yet reviewed by a person or with assistive technology.
