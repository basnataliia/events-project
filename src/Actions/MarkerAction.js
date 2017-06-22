import {SHOW_MARKER_POPOVER} from './ActionTypes';

export function handleMarkerClick(markerId, showInfo) {
  return {
    type: SHOW_MARKER_POPOVER,
    payload: {
      markerId: markerId,
      showInfo: showInfo,
    },
  };
}
