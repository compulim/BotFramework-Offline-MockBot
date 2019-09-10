import AdaptiveCard from './AdaptiveCard';
import AnimationCard from './AnimationCard';
import AudioCard from './AudioCard';
import CardActions from './CardActions';
import Carousel from './Carousel';
import ChannelData from './ChannelData';
import Default from './Default';
import DumpActivity from './DumpActivity';
import Echo from './Echo';
import EchoTyping from './EchoTyping';
import EmptyCard from './EmptyCard';
import Help from './Help';
import HelpSimple from './HelpSimple';
import HeroCard from './HeroCard';
import Hint from './Hint';
import Image from './Image';
import Markdown from './Markdown';
import ReceiptCard from './ReceiptCard';
import SuggestedActionsCard from './SuggestedActionsCard';
import Text from './Text';
import ThumbnailCard from './ThumbnailCard';
import Typing from './Typing';
import User from './User';
import Upload from './Upload';
import Value from './Value';
import Video from './Video';
import VideoCard from './VideoCard';
import Xml from './Xml';

export default [
  AdaptiveCard,
  AnimationCard,
  AudioCard,
  CardActions,
  Carousel,
  ChannelData,
  Echo,
  EchoTyping,
  EmptyCard,
  DumpActivity,
  Help,
  HelpSimple,
  HeroCard,
  Hint,
  Image,
  Markdown,
  ReceiptCard,
  SuggestedActionsCard,
  Text,
  ThumbnailCard,
  Typing,
  User,
  Upload,
  Video,
  VideoCard,
  Xml
].map(command => ({
  ...command,
  pattern: typeof command.pattern === 'string' ? new RegExp(`^${ command.pattern }$`, 'i') : command.pattern,
}));

export { Default, Value };
