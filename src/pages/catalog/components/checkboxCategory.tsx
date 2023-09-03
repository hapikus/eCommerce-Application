import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { fetchAllCategory, setSelectedTag } from '../../../redux/slice/productSlice';
import store, { RootState } from '../../../redux/store';

function CheckBoxCategory() {
  const dispatch = useDispatch();

  const categoryAll = useSelector(
    (state: RootState) => state.product.isAllCategoryData,
  );

  const selectedTag = useSelector(
    (state: RootState) => state.product.selectedTag,
  );

  const fetchAllCat = async () => {
    if (categoryAll.length === 0) {
      await store.dispatch(fetchAllCategory());
    }
  };

  const setTag = (checkedValues: CheckboxValueType[]) => {
    dispatch(setSelectedTag(checkedValues));
  };

  useEffect(() => {
    fetchAllCat();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = categoryAll.map((tag) => ({ label: tag, value: tag }));
  return (
    <div>
      <Checkbox.Group
        options={options}
        onChange={setTag}
        value={selectedTag}
      />
    </div>
  );
}

export default CheckBoxCategory;
