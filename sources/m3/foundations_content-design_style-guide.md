# Style guide

> UI text should be understandable by anyone, anywhere

slug: style-guide  |  updated: 2026-08-04T07:53:19.197Z

<!-- section: UX writing best practices -->

### Explain consequences

Emphasize the results of the user’s potential action in neutral, direct language. Avoid cautions or warnings that might sound alarming, intimidating, or condescending. Focus instead on communicating the consequences of a function.

_footer: Tell users what will happen if they take an action and how they can undo it_
_altText: "Move to trash?" dialog with the message "Big birthday bash will be deleted after 30 days."_

_footer: Don’t misrepresent consequences or try to influence a user’s decision_
_altText: "Are you sure you want to move to trash?"dialog with the message "You'll be able to find "Big birthday bash" in your trash for 30 days."_

### Use scannable words and formats

People scan UI text in search of the most meaningful content to them. Help by using specific titles and headings that clearly describe a topic. When users are skimming or hurrying through an action, this organization helps them avoid mistakes and unintentional actions.

_footer: Use headings and subheads to prioritize and group information_
_altText: Easily scannable content with different headings and subheadings on a card._

### Use sentence case

Unless otherwise specified, use sentence-style capitalization, where only the first letter of the first word in a sentence or phrase is capitalized. All text, including titles, headings, labels, menu items, navigation components, app bars, and buttons should use sentence-style capitalization.

Products and branded terms may also be capitalized.

_footer: Capitalize the first word of a sentence or phrase_
_altText: Sentence-style capitalization used for the title and consequence statement  in a dialog._

_footer: Don’t use title case capitalization. Instead, use sentence case._
_altText: Title casing used for the title  in a dialog._

### Use abbreviations sparingly

Spell out words whenever possible. Shortened forms of words can be difficult for people to understand and screen readers to read. Avoid Latin abbreviations in UI text such as e.g. or etc. Instead, use full phrases like "for example," or "and more."

_footer: When an abbreviation is appropriate, make sure it’s formatted and spelled correctly to avoid confusion_
_altText: AM and PM abbreviations used on a clock app._

_footer: Avoid using abbreviations when there’s space to spell out a word_
_altText: Abbreviations used for months and days on buttons when there is enough space to spell them out._

<!-- section: Word choice -->

## Pronouns

### Use second person pronouns ("you")

Use the second-person pronouns “you” and “your” to help the user to feel like the UI is talking to them and referring to their actions

_footer: Write from the user’s point of view to help them take action_
_altText: Offline error message saying "Your mail isn't available. Try checking your Wi-Fi connection."_

_footer: Avoid writing that sounds impersonal and robotic_
_altText: Offline error message saying "Mail not available."_

### Don’t combine first and second person

Avoid mixing "me" or "my" with "you" or "your.” It can cause confusion to see both forms of address in the same context.

_footer: Write from a user’s point of view by emphasizing their perspective with “you” and “your”_
_altText: "Your photos" is used in the description of a photo wall to emphasize the user's perspective._

_footer: Don’t mix different forms of address in the same screen. Instead, use “you” and “your” or get rid of the pronoun._
_altText: My' is used in the title and 'Your' in the description of a photo album._

### Use caution with “I” and “we”

When written on behalf of a large, global company like Google, “we” or “I” may come across as robotic or disconcerting. 

Focus on the user’s point of view, rather than Google’s, and consider if it’s possible to rewrite a phrase without “we.”

_footer: Don’t use first person pronouns to speak for the voice of Google_
_altText: "We're glad you're our customer" is the title of a survey by Google._

_footer: Avoid using first person pronouns. Write from the user’s point of view by using second person pronouns or removing pronouns altogether._
_altText: "My latest episode" and "My best match" are the titles used in a video app._

Some legal texts may merit an exception: “I” or “my” (the first person) emphasizes ownership in agreements or acknowledgments. For example, “I agree to the terms of service.”

_footer: First person pronouns can help users understand when they’re making impactful decisions_
_altText: "I agree" is used in the description of an agreement checkbox to emphasize on user's ownership._

_footer: Use caution with “we” or “our.” Even when these pronouns represent real people employed by Google, seeing first person pronouns in UI text can be confusing or jarring._
_altText: A part of Google ad message says, "Plus, we can assist with setting up your first campaign at no extra cost."_

<!-- section: Grammar and punctuation -->

This style guide is specific to English-language UX writing. Google generally follows [Associated Press (AP) style](http://www.apstylebook.com).

### Skip periods and unnecessary punctuation

To help readers scan text, avoid using periods and other unnecessary punctuation. 

Avoid using periods to end single sentences, particularly in:

-
Labels

-
Tooltip text

-
Bulleted lists

-
Dialog body text

-
Hyperlinked text

Use periods on:

-
Multiple sentences

-
Long or complex sentences, if it suits the context

_footer: Omit punctuation on single-line sentences_
_altText: Example of a period removed at the end of a short sentence on a snackbar._

_footer: Avoid using periods to end single sentences_
_altText: Example of a period used at the end of a short sentence on a snackbar._

### Use contractions

Contractions can make a sentence easier to understand and scan.

However, sometimes "do not" can give more emphasis than "don't” when caution is needed.

_footer: Avoid spelling out words that can be contractions_
_altText: Dialog with the title "You can't edit"._

_footer: Phrases that aren’t contracted can feel stiff or overly formal_
_altText: Dialog with the title "You cannot edit"._

### Use serial commas

Use the serial (or Oxford) comma, except before an ampersand.

Always place commas inside quotation marks.

_footer: Use a serial comma in lists of three or more items_
_altText: Serial comma used in an information text containing 3 items._

_footer: Don’t skip serial commas before “and”_
_altText: Serial comma not used in an information text containing 3 items._

### Use commas for numbers between 1,000 and 1 million

Use commas for numbers over 1,000. Don’t use commas when identifying something, such as a:

- Street address
- Radio frequency
- Year

For numbers over 1 million, comma use depends on context. “Million” can be abbreviated with with “M” and the value can be rounded when the intent is to give people a sense of the volume, rather than the exact numbers.

_footer: Abbreviate “million” with “M” and don’t use commas when giving people a sense of volume_
_altText: Music app showing song with 23 million views, which is abbreviated to 23M_

_footer: Use commas in numbers between 1,000 and 1 million_
_altText: Restaurant with 1,185 reviews, without abbreviation_

### Skip colons in headings

For headings on lists of items, do not use colons. For lists within body text, use a colon.

_footer: Use colons for lists within body text_
_altText: Colon used after the introduction statement for a list._

### Use exclamation points sparingly

Exclamation points can come across as shouting or overly friendly. Some exceptions include greetings or congratulatory messages.

_footer: Exclamation marks can be used to emphasize celebratory moments_
_altText: Exclamation mark used after "Congratulations"._

_footer: Avoid using exclamation marks for empty states and common tasks. Save it for bigger accomplishments._
_altText: Exclamation mark used after a general statement._

### Use ellipses sparingly

Use ellipses to indicate an action in progress or incomplete text. Truncated text may appear with ellipses, but check with your engineering partners before implementing, as this often happens automatically.

Don’t add a space before ellipses. Omit ellipses from menu items or buttons that open a dialog or start a process.

_footer: Ellipses show an action in progress_
_altText: A process indicator shows a 45% completion state._

_footer: Don’t use ellipses in buttons or menu items_
_altText: A button as part of a form has text saying "Saving" following by an ellipses._

### Use parentheses to define terms

Parentheses can be used to define acronyms or jargon or when referencing a source. They shouldn’t be used when adding a side note or an afterthought of a sentence.

_footer: Use parentheses to define terms and jargon_
_altText: Parentheses used to define an acronym._

_footer: Don’t use parentheses to add extra thoughts. If information is needed, include it in the sentence without parentheses for easier scanning and improved comprehension._
_altText: Parentheses used for adding an additional thought to a statement._

### Skip ampersands in body text

The “&” symbol can be used instead of “and” in headlines, column headers, table headers, navigation labels, and buttons. However, when there’s room, spelling out “and” can improve readability and make scanning easier.

“And” should be spelled out in sentences and paragraphs, before the final item in a 3+ item list, and in email subject lines.

_footer: Ampersands can be used in headlines where there's limited space_
_altText: Ampersand used in a heading._

_footer: Avoid ampersands in email subject lines_
_altText: Ampersand used in an email subject line._

### Use dashes with caution

Dashes and hyphens can interrupt a sentence and lead to a fragmented experience, so they should be used with caution. There are three kinds of dashes:

-
Em dash: —

-
En dash: –

-
Hyphen: -

Em dashes are best avoided in UX writing, as they indicate a break in the flow of a sentence that could be simplified using a comma, period, or new sentence. 

Use an en dash without spaces to indicate a range, such as 9 AM–Noon.

_footer: Use an en dash without spaces for ranges_
_altText: En dash used for time range._

### Use hyphens with care

Hyphens can help readers better understand how words relate to each other by binding closely related words. They can also be used to represent negative numbers, such as -100. Spaces should never be used surrounding hyphens.

Refer to the [Associated Press (AP) style guidelines](http://www.apstylebook.com) if you are unsure whether an adjective or noun phrase needs a hyphen.

**Rule**
 | **Examples** | **Why** |
**Hyphenate adjective phrases** | Case-by-case basis
Best-in-class performance
Once-in-a-lifetime opportunity | When multiple words are used together as an adjective, they should be hyphenated  |
Cell phone number
Chocolate chip cookie | However, proper nouns and common, easily understood adjective phrases don't need to be, such as "cell phone number" or "chocolate chip cookie" |
**Hyphenate noun phrases**
A noun phrase is two or more words acting as a noun. These phrases are hyphenated in certain cases: | Sign-off
Drive-through
Go-ahead | Hyphenate a noun phrase if it contains a verb followed by an adverb |
Higher-up
Most-read | Hyphenate an adjective phrase that is functioning as a noun |
Jack-of-all-trades
Stick-in-the-mud | Some noun phrases, especially long or complicated ones, are always hyphenated |
**Don't hyphenate verb phrases**
A verb phrase is two or more words acting as a verb. These should not be hyphenated. |
Look out for falling rocks

Please drive in and drop off your car

Check in to the room when you arrive
 | Don't hyphenate a verb followed by an adverb or preposition if it's functioning as a verb phrase. For example, "check in" would not need a hyphen when used as a verb, such as "check in to the room," rather than as a noun, like "the next check-in." Also, note that since "in" is a part of the verb, it can't be combined with "to" to form "into," since check into doesn't mean the same as check in to. |

### Use italics sparingly

Italics typically aren't easy to read. When emphasizing text, use bold weight instead.  

However, italics can provide unique emphasis when applied to a single word or phrase, like a name or title.

_footer: Italicize a word or phrase_
_altText: Dialog with Home Laptop in italics while rest of supporting text is not italicized._

_footer: Don’t italicize a sentence_
_altText: Dialog with all supporting text in italics._

### Don’t use caps blocks 

Avoid using caps blocks altogether; they're not accessible.

_footer: Don't use caps block. Use sentence case for all product text._
_altText: UI for Maps showing description of a location with a single word in a caps block._
