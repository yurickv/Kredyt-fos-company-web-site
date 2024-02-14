import { SecondButton } from "../SecondButton";

export const SectionServices = () => {
  return (
    <section>
      <div className="bg-primary_100 min-w-96 h-40">
        {" "}
        <SecondButton
          route="/"
          text="Дізнатись більше"
          style="hidden lg:block"
        />
      </div>
    </section>
  );
};
