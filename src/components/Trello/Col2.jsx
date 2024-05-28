import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { FaPlus } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";


function Col2() {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const storedColumns = localStorage.getItem('columns');
        if (storedColumns) {
            setColumns(JSON.parse(storedColumns));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('columns', JSON.stringify(columns));
    }, [columns]);

    const handleAddColumn = () => {
        const newColumn = {
            id: Date.now().toString(),
            name: '1',
        };
        setColumns(prevColumns => [...prevColumns, newColumn]);
    };

    const updateColumn = (id, key, value) => {
        const updatedColumns = columns.map(column =>
            column.id === id ? { ...column, [key]: value } : column
        );
        setColumns(updatedColumns);
    };

    const handleUpdate = (e, id) => {
        updateColumn(id, 'name', e.target.value);
    };

    const handleDragEnd = (result) => {
        const { source, destination, type } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        if (type === "group") {
            const reorderedColumns = Array.from(columns);
            const [movedColumn] = reorderedColumns.splice(source.index, 1);
            reorderedColumns.splice(destination.index, 0, movedColumn);
            setColumns(reorderedColumns);
        } else {
            const sourceColumnIndex = columns.findIndex(column => column.id === source.droppableId);
            const destinationColumnIndex = columns.findIndex(column => column.id === destination.droppableId);

            const sourceItems = Array.from(columns[sourceColumnIndex].items);
            const destinationItems = source.droppableId !== destination.droppableId ? Array.from(columns[destinationColumnIndex].items) : sourceItems;

            const [movedItem] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, movedItem);

            const newColumns = Array.from(columns);
            newColumns[sourceColumnIndex] = { ...newColumns[sourceColumnIndex], items: sourceItems };
            newColumns[destinationColumnIndex] = { ...newColumns[destinationColumnIndex], items: destinationItems };

            setColumns(newColumns);
        }
    };

    return (
        <div className="w-[270px] mt-10 p-4 rounded-xl bg-[#101204]">
            <h1 className="text-2xl font-semibold text-[#B6C2CF]">Boshlandi</h1>
            <div className="w-full">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="ROOT" type="group">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {columns.map((column, index) => (
                                    <Draggable draggableId={column.id} index={index} key={column.id}>
                                        {(provided) => (
                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                <Droppable droppableId={column.id}>
                                                    {(provided) => (
                                                        <div className="mt-3 flex items-center justify-between gap-10 border-none">
                                                            <div className="flex items-center gap-6">
                                                                    <IoIosMenu className="text-2xl text-[#B6C2CF]"></IoIosMenu>
                                                                    <input
                                                                        value={column.name}
                                                                        onChange={(e) => handleUpdate(e, column.id)}
                                                                        className=" w-full h-[40px] text-[#B6C2CF] bg-[#22272B] border-none py-1 px-3 outline-none rounded"
                                                                        type="text"
                                                                        placeholder="Ustun nomi"
                                                                    />
                                                            </div>
                                                        </div>
                                                    )}
                                                </Droppable>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>

            <div>
                <button onClick={handleAddColumn} className="text-[#B6C2CF] mt-3 flex items-center gap-2 cursor-pointer">
                    <span><FaPlus /></span>
                    <span>Add a Card</span>
                </button>
            </div>
        </div>
    );
}

export default Col2;
