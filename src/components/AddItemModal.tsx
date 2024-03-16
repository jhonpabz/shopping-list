import Modal from "@/components/Modal";
import useShoppingList from "@/hooks/redux/useShoppingList";
import BaseButton from "@/components/base/BaseButton";
import { useForms } from "@/hooks/form/useForms";
import { quantityOption, typeOption } from "@/constants/formOptions";
import { SelectField, TextField } from "@/components/forms";

export default function AddItemModal() {
  const {
    state: { showAddItemModal },
    hideAddListModal,
  } = useShoppingList();

  const { listForm, onSubmitList } = useForms();

  return (
    <Modal isOpen={showAddItemModal} onClose={hideAddListModal}>
      <form
        className=" p-4 md:p-6 relative w-[300px] sm:w-[400px] md:w-[600px] bg-[#fff] rounded-[12px]"
        onSubmit={listForm.handleSubmit(onSubmitList)}
      >
        <span className="text-black">ADD ITEM MODAL</span>

        <TextField
          name="listName"
          label="List Name"
          placeholder="Item Name"
          form={listForm}
        />

        <SelectField
          form={listForm}
          register={listForm.register}
          name="type"
          options={typeOption}
          label="Type"
          required
        />

        <SelectField
          form={listForm}
          register={listForm.register}
          name="quantity"
          options={quantityOption}
          label="Quantity"
        />
        <div className="flex gap-3 justify-end">
          <BaseButton primary type="submit">
            SAVE
          </BaseButton>
          <BaseButton onClick={() => hideAddListModal()}>CLOSE</BaseButton>
        </div>
      </form>
    </Modal>
  );
}
