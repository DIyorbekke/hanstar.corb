import korpus from "../../../public/korpus.jpg";

const Shoptoli = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <h1 className="text-center pt-8 ">КУЗОВ</h1>
        <div className="flex justify-between my-12 ">
          <img src={korpus} alt="" className="w-[50%]" />
          <div className="bg-slate-500  rounded-2xl p-10 text-white">
            <p>
              Ку́зов — часть автомобиля или другого транспортного средства,
              предназначенная для размещения пассажиров и груза. Кузов крепится
              к раме автомобиля. Что входит в услугу: <br />
              • выпрямление;
              <br />
              • устранение вмятин и царапин;
              <br />
              • замена поврежденных обшивок и панелей;
              <br />• восстановление геометрии кузова
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoptoli;
