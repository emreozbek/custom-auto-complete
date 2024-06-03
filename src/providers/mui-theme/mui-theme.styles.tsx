import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        width: 100%;
        min-height: 100vh;
      }

      .sortableDraggedItem {
        z-index: 50000 !important;
      }

      .sortableContainer > div,
      .sortableContainer li {
        z-index: inherit !important;
      }
    `}
  />
);
