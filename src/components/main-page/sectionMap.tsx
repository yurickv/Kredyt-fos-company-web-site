export const SectionMap = () => {
  return (
    <section className="bg-netural_100">
      <div className="pt-[50px] pb-[25px] px-4 md:px-[78px] lg:px-[120px]">
        <div className=" lg:max-w-[1296px] lg:mx-auto">
          <h2 className="title !font-semibold">Ми на карті</h2>{" "}
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d647.0524346689023!2d25.597006368051993!3d49.55606560835661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730314b8563f999%3A0xf0d35536f3868163!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0KTRgNCw0L3QutCwLCA0MCwg0JLQuNGJ0ZYg0JvRg9CxJ9GP0L3QutC4LCDQotC10YDQvdC-0L_RltC70YzRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDczNjI!5e0!3m2!1suk!2sua!4v1708774544068!5m2!1suk!2sua"
        className="w-full h-[402px] md:h-[391px] lg:h-[452px]"
        // allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
