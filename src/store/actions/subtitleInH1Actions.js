import * as actions from './types';

export const getSubtitleInH1 = (subtitle) => ({
    type: actions.GET_SUBTITLE_IN_H1,
    subtitle
});