import "./Example3.scss";

const Example3 = () => {
  return (
    <>
      <div class="container3">
        {/* <!--block-1 has 3 children, box-1,box-2,box-3 --> */}

        <div class="block-1">
          <div class="box-1"> A </div>
          <div class="box-2"> B </div>
          <div class="box-3"> C </div>
        </div>

        <div class="block-2">
          <div class="box-4"> D </div>
          <div class="box-5"> E </div>
          <div class="box-6"> F </div>
        </div>

        <div class="block-3">
          <div class="box-7"> G </div>
          <div class="box-8"> H </div>
          <div class="box-9"> I </div>
        </div>
      </div>
    </>
  );
};
export default Example3;
