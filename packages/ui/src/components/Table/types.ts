/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */
import { TableProps as CloudscapeTableProps } from '@cloudscape-design/components/table';
import { CollectionPreferencesProps } from '@cloudscape-design/components/collection-preferences';

export interface BaseTableProps extends CloudscapeTableProps {
    /**
     * Disable pagination
     * */
    disablePagination?: boolean;
    /**
     * Disable preference toolbar
     * */
    disableSettings?: boolean;
    /**
     * Disable search filters
     * */
    disableFilters?: boolean;
    /**
     * Disable row select
     * */
    disableRowSelect?: boolean;
    /**
     * Options for page size in collection preferences.
     */
    collectionPreferencesProps?: Partial<CollectionPreferencesProps>;
    /**
     * The default number of rows on any given page
     * */
    defaultPageSize?: number;
    /**
     * The default index of the page that should be displayed
     * */
    defaultPageIndex?: number;
    /**
     * The actions displayed on the header
     */
    actions?: React.ReactNode;
}

export interface FetchDataOptions {
    pageSize: number;
    pageIndex: number;
    filterText?: string;
    sortingField?: string;
    isDescending?: boolean;
}

export interface RemoteUpdateTableProps extends BaseTableProps {
    /**
     * Handler for updating data when table options (pageSize, pageIndex, filterText) change. <br/>
     * If the handler is not provided, data is processed automatically.
     * */
    onFetchData?: (options: FetchDataOptions) => void;
}

export interface InternalTableProps {
    collectionPreferences: CollectionPreferencesProps.Preferences;
}

export type TableProps = RemoteUpdateTableProps | BaseTableProps;

export interface ColumnDefinition<T> extends CloudscapeTableProps.ColumnDefinition<T> {}

export interface SelectionChangeDetail<T> extends CloudscapeTableProps.SelectionChangeDetail<T> {}
