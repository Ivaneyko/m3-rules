# Cases: reading sources

## A question the rules cover

**Task**: "How tall is a small app bar?"

**The answer must**:
- answer from the rule file (64, [navigation → app bars](../../components/navigation.md#app-bars)).

**The answer must not**:
- open anything in `sources/` ([SKILL → reading sources](../../SKILL.md#reading-sources)).

## A question the rules leave open

**Task**: "Which colour is the tabs divider?"

**The answer must**:
- give both values the rules record (`outline-variant` on the page, `surface-variant` in the tokens) ([navigation → tabs](../../components/navigation.md#tabs));
- if it wants to check further, first ask the user, naming the file and section (`sources/m3/components_tabs.md` → *Primary tabs color*), and wait ([SKILL → reading sources](../../SKILL.md#reading-sources)).

**The answer must not**:
- read a whole page, the whole folder, or search all of `sources/` without asking;
- leave out the `Sources read:` line after reading a section.
