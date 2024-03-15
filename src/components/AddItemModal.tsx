import Modal from "@/components/Modal";
import useShoppingList from "@/hooks/redux/useShoppingList";
import BaseButton from "@/components/base/BaseButton";
import TextField from "./forms/TextField";
import { useForms } from "@/hooks/form/useForms";
import SelectField from "./forms/SelectField";
import { quantityOption } from "@/constants/formOptions";

export default function AddItemModal() {
  const {
    state: { showAddItemModal },
    hideAddListModal,
  } = useShoppingList();

  const { listForm, onSubmitList } = useForms();

  return (
    <Modal
      isOpen={showAddItemModal}
      onClose={hideAddListModal}
      modalContainerExtendedClassName="py-25px relative w-11/12  max-w-[580px] rounded-[12px] bg-[#fff] px-[18px] text-center sm:px-[30px] sm:py-[32px] md:px-[36px] md:py-[34px] lg:px-[45px] lg:py-[38px] xl:px-[62px] xl:py-[41px]"
      modalContentExtendedClassName="relative"
    >
      <span className="text-black">ADD ITEM MODAL</span>
      <form onSubmit={listForm.handleSubmit(onSubmitList)}>
        <TextField
          name="listName"
          label="List Name"
          placeholder="Item Name"
          form={listForm}
        />
        <SelectField
          form={listForm}
          register={listForm.register}
          name="quantity"
          options={quantityOption}
          label="Quantity"
        />
        <BaseButton type="submit">SAVE</BaseButton>
        <BaseButton onClick={() => hideAddListModal()}>CLOSE</BaseButton>
      </form>
    </Modal>
  );
}
