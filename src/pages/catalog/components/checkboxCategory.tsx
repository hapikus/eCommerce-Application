import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox, Divider, Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import {
  fetchAllCategory,
  setSelectedFilters,
} from '../../../redux/slice/productSlice';
import store, { RootState } from '../../../redux/store';

import styles from './checkBoxCategory.module.css';
import { IFilters } from '../../../types/storeType';

function CheckBoxCategory() {
  const dispatch = useDispatch();

  const categoryAll = useSelector(
    (state: RootState) => state.product.isAllCategoryData,
  );

  const selectedFilters = useSelector(
    (state: RootState) => state.product.selectedFilters,
  );

  const availableFilters = useSelector(
    (state: RootState) => state.product.availableFilters,
  );

  const fetchAllCat = async () => {
    if (categoryAll.length === 0) {
      await store.dispatch(fetchAllCategory());
    }
  };

  const setFilters = (type: string) => (checkedValues: CheckboxValueType[]) => {
    const newFilters: IFilters = {
      ...selectedFilters,
      [type]: checkedValues,
    };
    dispatch(setSelectedFilters(newFilters));
  };

  useEffect(() => {
    fetchAllCat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    availableFilters.genres === undefined ||
    availableFilters.tags === undefined ||
    availableFilters.themes === undefined
  ) {
    return null;
  }
  const optionsAvaGenres = availableFilters.genres.map((genre) => ({
    label: genre,
    value: genre,
  }));
  const optionsAvaThemes = availableFilters.themes.map((theme) => ({
    label: theme,
    value: theme,
  }));
  const optionsAvaTags = availableFilters.tags.map((tag) => ({
    label: tag,
    value: tag,
  }));

  const getFilters: () => CollapseProps['items'] = () => [
    {
      key: 'genres',
      label: 'Genres',
      children: (<Checkbox.Group
        options={optionsAvaGenres}
        onChange={setFilters('genres')}
        value={selectedFilters.genres}
        className={styles.checkBoxGroup}
      />),
    },
    {
      key: 'themes',
      label: 'Themes',
      children: (<Checkbox.Group
        options={optionsAvaThemes}
        onChange={setFilters('themes')}
        value={selectedFilters.themes}
        className={styles.checkBoxGroup}
      />),
    },
    {
      key: 'tags',
      label: 'Tags',
      children: (<Checkbox.Group
        options={optionsAvaTags}
        onChange={setFilters('tags')}
        value={selectedFilters.tags}
        className={styles.checkBoxGroup}
      />),
    },
  ];
  return (
    <div>
      <Divider>Genres</Divider>
      <Collapse
        defaultActiveKey={['genres', 'themes']}
        bordered={false}
        items={getFilters()}
      />
    </div>
  );
}

export default CheckBoxCategory;
