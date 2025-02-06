import { BookReader } from "../components/BookReader";
import { Navbar } from "../components/Navbar";
import { isMobile } from "../utils/helpers";

const MOCK_DATA = {
  title: "Chapter 1. New story.",
  content: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae pellentesque metus. Maecenas molestie nec sapien sed fermentum. Cras ex sapien, fermentum vel consectetur non, efficitur nec est. Cras cursus eros eget facilisis malesuada. Donec maximus iaculis ligula in commodo. In eget fermentum ipsum. Cras sit amet tristique metus. Nullam vel quam facilisis, lacinia augue vel, ornare arcu. Morbi at velit fringilla, varius est nec, suscipit velit. Ut porta porttitor mattis. Fusce tempus urna sed justo pharetra, ut volutpat lectus posuere.',
    'Cras consectetur nisl ligula, at luctus dui suscipit a. Nunc vitae orci in felis tincidunt semper. Suspendisse sit amet pulvinar diam. Ut elementum interdum lacus, sit amet finibus lorem iaculis et. In hac habitasse platea dictumst. Vivamus mi arcu, eleifend gravida eros non, rhoncus mattis risus. Aliquam quam eros, finibus nec vehicula fermentum, ultrices ultricies tortor. Duis et libero gravida, tincidunt ex sed, posuere nisl. Curabitur euismod ornare malesuada. Suspendisse egestas, libero ornare imperdiet volutpat, risus dolor feugiat nibh, ut ullamcorper erat sapien ut orci. Mauris non ante tincidunt ex venenatis cursus. Suspendisse nec scelerisque est.',
    'Aenean bibendum eu enim et facilisis. Aenean accumsan lectus nibh, ac lobortis ex congue eget. Quisque id metus mi. Donec aliquet aliquam enim ac mattis. Integer vitae quam fermentum, vulputate elit id, aliquam diam. Cras accumsan ex ac velit hendrerit imperdiet. Quisque iaculis leo iaculis lacus suscipit consequat. Pellentesque quis lorem vel velit dapibus elementum ac at quam. Sed ut varius ex. Praesent ac metus id nisl convallis vehicula. Etiam augue justo, eleifend sit amet ipsum sed, feugiat porttitor sem.',
    'Nunc vel ornare nunc, sed tincidunt dui. Praesent orci orci, ornare sit amet massa sit amet, auctor fringilla ante. Donec arcu dui, aliquam a condimentum quis, malesuada id massa. Integer ac magna nisl. Cras tristique et orci eget sodales. Suspendisse et semper mauris, nec laoreet ipsum. Fusce ac libero a eros ornare tempor et et ex. Maecenas tincidunt semper sem vitae sagittis. In pulvinar tempus augue, sit amet aliquam est dictum ut.',
    'Nulla lectus massa, sodales in ultricies eget, viverra at dui. Fusce dui purus, vehicula sed erat dignissim, dictum vestibulum nisl. Duis faucibus odio ut dignissim interdum. Nulla at pretium elit, eu ornare nisl. Cras mi ex, aliquam et magna quis, semper dictum purus. Sed scelerisque porta pellentesque. Cras pharetra tortor eget fringilla faucibus. Ut a quam dui. Phasellus molestie nibh vitae aliquet posuere. Aliquam varius pharetra metus, nec ullamcorper tortor sollicitudin a. Donec mollis, magna id euismod iaculis, felis neque aliquet justo, sed tempus nisl nunc in nunc.',
    'Morbi id suscipit quam. Aenean ac neque eleifend, vehicula tellus sit amet, luctus libero. Aenean consequat eu nisl vel laoreet. Mauris bibendum arcu vel sapien tristique, porta pretium nibh maximus. Etiam mollis, velit eu luctus molestie, turpis ligula aliquet velit, at ultrices elit nibh at enim. Aenean ac tellus viverra, convallis magna eget, ultricies tortor. Donec elementum auctor sapien sit amet scelerisque.'
  ]
}

export default function Home() {
  const isMobileDevice = isMobile();

  return (
    <div className='pt-[124px]'>
      <Navbar isMobile={isMobileDevice} />
      <BookReader title={MOCK_DATA.title} content={MOCK_DATA.content} />
    </div>

  );
}
