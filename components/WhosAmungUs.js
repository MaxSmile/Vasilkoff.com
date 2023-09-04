export default function WhosAmungUs() {
    function createMarkup() {
        return {__html: 'First &middot; Second'};
      }
    return <div dangerouslySetInnerHTML={createMarkup()} />;
}