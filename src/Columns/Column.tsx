import { FC } from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Card, { CardType } from "../Card/Card";
import style from "./Column.module.css";

export type ColumnType = {
  id: string;
  title: string;
  cards: CardType[];
};

const Column: FC<ColumnType> = ({ id, title, cards }) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} className={style.container}>
        <p className={style.title}>{title}</p>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title}></Card>
        ))}
      </div>
    </SortableContext>
  );
};

export default Column;
