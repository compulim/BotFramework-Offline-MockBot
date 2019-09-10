import { TurnContext } from 'botbuilder-core';

const SUGGESTED_ACTIONS = {
  suggestedActions: {
    actions: [{
      type: 'imBack',
      title: 'Red',
      value: 'sample:redux-middleware red'
    }, {
      type: 'imBack',
      title: 'Green',
      value: 'sample:redux-middleware green'
    }, {
      type: 'imBack',
      title: 'Blue',
      value: 'sample:redux-middleware blue'
    }, {
      type: 'imBack',
      title: 'Translucent',
      value: 'sample:redux-middleware transparent'
    }],
    to: []
  }
};

const help = () => ({
  'sample:redux-middleware': 'Demo for Redux middleware sample'
});

async function processor(context: TurnContext, { args: color }) {
  color = color.trim();

  if (color) {
    const action = {
      type: 'SET_BACKGROUND_COLOR',
      payload: { color }
    };

    context.sendActivity({
      type: 'message',
      text: `Will send Redux action in another "message" activity.\n\n\`\`\`\n${ JSON.stringify(action, null, 2) }\n\`\`\`\n\nFeel free to let me know if you changed your mind.`,
      ...SUGGESTED_ACTIONS
    });

    context.sendActivity({
      type: 'event',
      name: 'redux action',
      value: action
    });
  } else {
    context.sendActivity({
      type: 'message',
      text: `Choose one of the background color`,
      ...SUGGESTED_ACTIONS
    });
  }
}

export default {
  help,
  name: 'Demo for Redux middleware sample',
  pattern: /^sample:redux-middleware(\s+[\d\w\-]+)*$/i,
  processor
 }
