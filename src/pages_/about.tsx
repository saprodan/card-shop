import { Header } from '@/features';
import { FC } from 'react';

export const AboutPage: FC = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1450px] px-6">
        <p className="font-semibold text-[24px] text-center my-10">
          О нас
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Labore officia corrupti blanditiis hic? Ab veritatis fugit
          consectetur impedit officia quisquam quia corporis. Nihil,
          deserunt nulla et quos voluptatum tenetur doloribus impedit
          quo eum libero architecto optio est. Quae laboriosam
          voluptas asperiores architecto omnis ab unde obcaecati
          dolorum velit eum autem ipsum possimus officiis deleniti
          necessitatibus maxime ducimus ullam, quas quis, doloremque a
          corporis eaque enim. Aliquam cumque quia rerum. Aspernatur
          culpa rerum sapiente sequi repellat ad reprehenderit enim
          minus voluptates expedita. Repudiandae, hic soluta.
          Sapiente, debitis non saepe quidem tempore labore dolor
          expedita suscipit praesentium itaque incidunt doloribus
          veritatis quos, nemo repellendus
        </p>
      </div>
    </div>
  );
};
