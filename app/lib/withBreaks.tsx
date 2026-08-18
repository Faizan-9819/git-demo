import { Fragment, type ReactNode } from "react";

/**
 * Lets translation strings embed a literal "<br/>" (or "<br>", "<br />")
 * as a real line break, without reaching for dangerouslySetInnerHTML.
 */
export function withBreaks(text: string): ReactNode {
  return text.split(/<br\s*\/?>/i).map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
