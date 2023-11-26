

type AuthorizeFunction<RequestType = Request> = (
  ctx: RequestType,
  entity: any
) => boolean | Promise<boolean>

type FieldHookFunction<FieldValueType = any> = (
  payload: any,
  request: Request
) => FieldValueType
type SanitizationRules =
  | 'escape'
  | 'lower_case'
  | 'normalize_email'
  | 'plural'
  | 'singular'
  | 'slug'
  | 'strip_links'
  | 'strip_tags'
  | 'trim'
  | 'uppercase'

interface FieldProperty {
  name?: string
  entity?: () => any
  type?: any
  columnTypes?: string[]
  primary?: boolean
  serializedPrimaryKey?: boolean
  lazy?: boolean
  array?: boolean
  length?: any
  reference?: any
  wrappedReference?: boolean
  fieldNames?: string[]
  fieldNameRaw?: string
  default?: string | number | boolean | null
  defaultRaw?: string
  formula?: (alias: string) => string
  prefix?: string | boolean
  embedded?: [string, string]
  embeddable?: any
  embeddedProps?: any
  object?: boolean
  index?: boolean | string
  unique?: boolean | string
  nullable?: boolean
  inherited?: boolean
  unsigned?: boolean
  mapToPk?: boolean
  persist?: boolean
  hidden?: boolean
  enum?: boolean
  items?: (number | string)[]
  version?: boolean
  eager?: boolean
  setter?: boolean
  getter?: boolean
  getterName?: any
  cascade?: any[]
  orphanRemoval?: boolean
  onCreate?: (entity: any) => any
  onUpdate?: (entity: any) => any
  onDelete?: 'cascade' | 'no action' | 'set null' | 'set default' | string
  onUpdateIntegrity?:
  | 'cascade'
  | 'no action'
  | 'set null'
  | 'set default'
  | string
  strategy?: any
  owner?: boolean
  inversedBy?: string
  mappedBy?: string
  orderBy?: {
    [field: string]: any
  }
  fixedOrder?: boolean
  fixedOrderColumn?: string
  pivotTable?: string
  joinColumn?: string
  joinColumns?: string[]
  inverseJoinColumns?: string[]
  referencedColumnNames?: string[]
  referencedTableName?: string
  serializer?: (value: any) => any
  serializedName?: string
  comment?: string
  userDefined?: boolean
  virtualGetter?: (value: any) => any
}

interface SerializedField {
  name: string
  sidebar: boolean
  isVirtual: boolean
  component: FieldContract['component']
  inputName: string
  isSortable: boolean
  isFilterable: boolean
  description: string
  rules: string[]
  defaultValue: any
  isNullable: boolean
  isUnique: boolean
  isSearchable: boolean
  showOnIndex: boolean
  showOnDetail: boolean
  showOnUpdate: boolean
  showOnCreation: boolean
  updateRules: string[]
  creationRules: string[]
  hidden: boolean
  showOnPanel: boolean
  fieldName: string
  camelCaseName: string
  capsDatabasefieldName: string
  databaseField: string
  attributes: {
    [key: string]: string
  }
  selectOptions?: {
    label: string
    value: string
  }[]
  defaultToNow?: boolean
  isUnsigned?: boolean
  trueLabel?: string
  falseLabel?: string
  isRelationshipField: boolean
  camelCaseNamePlural: string
  pascalCaseName: string
  snakeCaseName: string
  snakeCaseNamePlural: string
}
interface FieldContract<FieldDocument = any> {
  showHideField: {
    /**
     *
     * If this is true, the field will be shown on the
     * index page
     *
     */
    showOnIndex: boolean
    /**
     *
     * If this is true, the field will be updatable. It will
     * show up on the update page
     *
     */
    showOnUpdate: boolean
    /**
     *
     * If this is true, the field will show up on the detail page
     */
    showOnDetail: boolean
    /**
     *
     * If this is true, the field will be shown on the creation
     * form
     */
    showOnCreation: boolean
  }
  sanitizeRule?: SanitizationRules
  showHideFieldFromApi: {
    hideOnCreateApi: boolean
    hideOnUpdateApi: boolean
    hideOnDeleteApi: boolean
    hideOnFetchApi: boolean
  }
  tenseiConfig: any | null
  authorizeCallbacks: {
    authorizedToSee: AuthorizeFunction
    authorizedToCreate: AuthorizeFunction
    authorizedToUpdate: AuthorizeFunction
    authorizedToDelete: AuthorizeFunction
  }

  property: FieldProperty
  graphqlType: string
  relatedProperty: FieldProperty
  afterConfigSet(): void
  type(type: string): any
  isRelationshipField: boolean
  onUpdate(hook: () => any): any
  onCreate(hook: () => any): any
  virtual(compute: (value: any) => any): any
  removeFromSidebarOnForms(): any
  dockToSidebarOnForms(): any
  required(): any
  requiredOnCreate(): any
  requiredOnUpdate(): any
  serializer(serializeFn: (value: any) => any): any
  formComponent(component: string): any
  indexComponent(component: string): any
  detailComponent(component: string): any
  getValueFromPayload(payload: any, request: any): any
  /**
   *
   * The name of the field. Will be used to display table columns,
   * field labels etc
   */
  name: string
  /**
   *
   * Define validation rules to be used to validate
   * this field on forms
   */
  validationRules: Array<string>

  arrayValidationRules: Array<string>
  /**
   *
   * Define validation rules to be used to validate
   * this field on creation forms
   */
  creationValidationRules: Array<string>
  /**
   *
   * Define validation rules to be used to validate
   * this field on update forms
   */
  updateValidationRules: Array<string>
  /**
   *
   * This is a set of all html attributes to be passed
   * to this component
   *
   */
  attributes: {}
  /**
   *
   * This value set to true will hide this field completely
   * from all query results.
   */
  isHidden: boolean
  /**
   *
   * This is a short name for the frontend component that
   * will be mounted for this field.
   */
  component: string
  /**
   *
   * The database field associated with this field.
   * By default, this will be the camel case
   * version of the name
   *
   */
  databaseField: string
  /**
   *
   * The
   */
  helpText: string
  isNullable: boolean
  isUnique: boolean
  /**
   *
   * Adds database sorting by this field. Will show up
   * on the index page, on the table headers.
   *
   */
  isSortable: boolean
  isFilterable: boolean
  isSearchable: boolean
  /**
   *
   * Set the default value of this
   * field
   *
   */
  defaultValue: any

  camelCaseName: string

  pascalCaseName: string

  camelCaseNamePlural: string

  snakeCaseName: string
  snakeCaseNamePlural: string

  capsDatabasefieldName: string
  /**
   * Instantiate a new field. Requires the name,
   * and optionally the corresponding database
   * field. This field if not provided will
   * default to the camel case version of
   * the name.
   */
  /**
   *
   * Show this field on the index page
   */
  showOnIndex(): any
  /**
   *
   * Show this field on the detail page
   */
  showOnDetail(): any
  /**
   *
   * Show this field on the creation page
   */
  showOnCreate(): any
  /**
   *
   * Show this field on the update page
   */
  showOnUpdate(): any
  /**
   *
   * Hide this field on the index page
   */
  hideOnIndex(): any
  /**
   *
   * Hide this field from the detail page
   */
  hideOnDetail(): any
  /**
   *
   * Hide this field from the create form
   */
  hideOnCreate(): any
  /**
   *
   * Hide this field from the update form
   */
  hideOnUpdate(): any
  /**
   *
   * Hide this field everywhere, except the index page
   */
  onlyOnIndex(): any
  /**
   *
   * Hide this field everuwhere, except the
   * create and update forms
   */
  onlyOnForms(): any
  /**
   *
   * Show this field only on the detail and,
   * index pages. hidden on create and
   * update forms.
   */
  exceptOnForms(): any
  hideOnApi(): any
  hideOnCreateApi(): any
  hideOnUpdateApi(): any
  hideOnDeleteApi(): any
  hideOnFetchApi(): any
  isHiddenOnApi(): boolean
  /**
   *
   * Make this field sortable
   *
   */
  sortable(): any
  /**
   *
   * Make this field searchable. will also index
   * this field in the database.
   *
   */
  searchable(): any
  /**
   *
   * Make this field sortable
   *
   */
  unique(): any
  /**
   *
   * Make this field not nullable
   *
   */
  notNullable(): any

  /**
   *
   * Make this field nullable
   *
   */
  nullable(this: any): any
  /**
   *
   * Define the description. This would be a help text
   * that provides more information to the user
   * about this field on forms.
   */
  description(description: string): this
  /**
   *
   * Set the default value for this field.
   * Will show up on create forms as
   * default
   *
   */
  default(value: any): this
  defaultFormValue(value: any): this
  defaultRaw(value: any): this
  /**
   *
   * Set html attributes for this component
   */
  htmlAttributes(attributes: {}): this
  /**
   *
   * @param this
   */
  rules(...rules: Array<string>): this
  arrayRules(...rules: Array<string>): this
  sanitize(rule: SanitizationRules): this
  /**
   * Set the validation rules to be used when
   * creating this field to the database
   */
  creationRules(...rules: Array<string>): this
  /**
   * Set the validation rules to be used when updating
   * this field
   */
  updateRules(...rules: Array<string>): this
  /**
   * Set this field to be a hidden field. It won't show up
   * in query results.
   */
  hidden<T extends FieldContract>(this: this): this
  canSee(authorizeFunction: AuthorizeFunction): any
  canCreate(authorizeFunction: AuthorizeFunction): any
  canUpdate(authorizeFunction: AuthorizeFunction): any
  canDelete(authorizeFunction: AuthorizeFunction): any
  /**
   *
   * Serializes the field for data to be sent
   * to the frontend
   *
   */
  serialize(): SerializedField
}
interface TextContract extends FieldContract {
  truncate(sub: number): any
}
interface IDContract extends FieldContract {}

export type SlugTypes = 'default' | 'date' | 'random'

interface SlugContract extends FieldContract {
  from(field: string, inputName?: string): any
  type(slugType: SlugTypes): any
  editable(): any
}
interface ValidationError {
  message: string
  field: string
}

export interface ActionFlashMessage {
  message: string
  variant?: 'positive' | 'negative' | 'warning'
  position?: 'top' | 'bottom'
}

export type HtmlResponse = string
 interface ValidationError {
    message: string
    field: string
  }
export type ActionResponse = Partial<ActionFlashMessage> & {
  status: number
  type: 'notification' | 'html' | 'validation-errors' | 'push'
  html?: HtmlResponse
  errors?: ValidationError[]
  route?: string
}

export type ActionParams = {
  request: any | null
  models: any[]
  payload?: any
  html: (
    html: HtmlResponse,
    status?: number
  ) => {
    html: HtmlResponse
    type: 'html'
    status: number
  }
  notification: (
    flash: ActionFlashMessage,
    status?: number
  ) => ActionFlashMessage & {
    type: 'notification'
    status: number
  }
  errors: (
    errors: ValidationError[],
    status?: number
  ) => {
    errors: ValidationError[]
    type: 'validation-errors'
    status: number
  }
  push: (
    route: string,
    status?: number
  ) => {
    status: number
    type: 'push'
    route: string
  }
}

export type ActionHandler = (
  actionParams: ActionParams
) => Promise<ActionResponse> | ActionResponse

interface ActionData {
  intent: 'positive' | 'negative' | 'primary'
  slug: string
  confirmText: string
  confirmButtonText: string
  cancelButtonText: string
  handler: ActionHandler
}

interface ActionDataWithFields extends ActionData {
  fields: FieldContract[]
}

export interface SerializedAction extends ActionData {
  name: string
  showOnIndex: boolean
  showOnDetail: boolean
  showOnTableRow: boolean
  fields: SerializedField[]
}
interface ActionContract {
  name: string
  data: ActionDataWithFields
  showHideField: {
    /**
     *
     * If this is true, the field will be shown on the
     * index page
     *
     */
    showOnIndex: boolean
    /**
     *
     * If this is true, the field will be updatable. It will
     * show up on the update page
     *
     */
    showOnTableRow: boolean
    /**
     *
     * If this is true, the field will show up on the detail page
     */
    showOnDetail: boolean
  }
  handle: (handler: ActionHandler) => this
  confirmText(confirmText: string): this
  confirmButtonText(confirmButtonText: string): this
  cancelButtonText(cancelButtonText: string): this
  /**
   *
   * Show this field on the index page
   */
  showOnIndex(): this
  /**
   *
   * Show this field on the detail page
   */
  showOnDetail(): this
  /**
   *
   * Show this field on the detail page
   */
  showOnTableRow(): this
  /**
   *
   * Hide this field on the index page
   */
  hideOnIndex(): this
  /**
   *
   * Hide this field from the detail page
   */
  hideOnDetail(): this
  /**
   *
   * Hide this field everywhere, except the index page
   */
  onlyOnIndex(): this
  /**
   *
   * Hide this field everywhere, except the index page
   */
  onlyOnDetail(): this
  /**
   *
   * Hide this field everywhere, except the table row page
   */
  onlyOnTableRow(): this
  negative(): this
  positive(): this
  fields(fields: FieldContract[]): this
  serialize(): SerializedAction
}
export class Action implements ActionContract {
  public data: ActionDataWithFields = {
    fields: [],
    slug: '',
    intent: 'primary',
    confirmText: 'Are you sure you want to run this action?',
    confirmButtonText: 'Run Action',
    cancelButtonText: 'Cancel',
    handler: () => ({
      message: 'Action has been run.',
      variant: 'positive',
      type: 'notification',
      status: 200
    })
  }

  public showHideField = {
    /**
     *
     * If this is true, the field will be shown on the
     * index page
     *
     */
    showOnIndex: true,

    /**
     *
     * If this is true, the field will be updatable. It will
     * show up on the update page
     *
     */
    showOnTableRow: false,

    /**
     *
     * If this is true, the field will show up on the detail page
     */
    showOnDetail: true
  }

  constructor(public name: string) {
    this.setValue('slug', name)
  }

  public handle = (handler: ActionHandler) => {
    this.setValue('handler', handler.bind(this))

    return this
  }

  public confirmText(confirmText: string) {
    this.setValue('confirmText', confirmText)

    return this
  }

  public confirmButtonText(confirmButtonText: string) {
    this.setValue('confirmButtonText', confirmButtonText)

    return this
  }

  public cancelButtonText(cancelButtonText: string) {
    this.setValue('cancelButtonText', cancelButtonText)

    return this
  }

  /**
   *
   * Show this field on the index page
   */
  public showOnIndex() {
    this.showHideField = {
      ...this.showHideField,
      showOnIndex: true
    }

    return this
  }

  /**
   *
   * Show this field on the detail page
   */
  public showOnDetail() {
    this.showHideField = {
      ...this.showHideField,
      showOnDetail: true
    }

    return this
  }

  /**
   *
   * Show this field on the detail page
   */
  public showOnTableRow() {
    this.showHideField = {
      ...this.showHideField,
      showOnTableRow: true
    }

    return this
  }

  /**
   *
   * Hide this field on the index page
   */
  public hideOnIndex() {
    this.showHideField = {
      ...this.showHideField,
      showOnIndex: false
    }

    return this
  }

  /**
   *
   * Hide this field from the detail page
   */
  public hideOnDetail() {
    this.showHideField = {
      ...this.showHideField,
      showOnDetail: false
    }

    return this
  }

  /**
   *
   * Hide this field everywhere, except the index page
   */
  public onlyOnIndex() {
    this.showHideField = {
      ...this.showHideField,
      showOnIndex: true,
      showOnDetail: false
    }

    return this
  }

  /**
   *
   * Hide this field everywhere, except the index page
   */
  public onlyOnDetail() {
    this.showHideField = {
      ...this.showHideField,
      showOnIndex: false,
      showOnDetail: true,
      showOnTableRow: false
    }

    return this
  }

  /**
   *
   * Hide this field everywhere, except the table row page
   */
  public onlyOnTableRow() {
    this.showHideField = {
      ...this.showHideField,
      showOnIndex: false,
      showOnDetail: false,
      showOnTableRow: true
    }

    return this
  }

  private setValue(key: keyof ActionDataWithFields, value: any) {
    this.data = {
      ...this.data,
      [key]: value
    }
  }

  negative() {
    this.setValue('intent', 'negative')

    return this
  }

  positive() {
    this.setValue('intent', 'positive')

    return this
  }

  fields(fields: FieldContract[]) {
    this.setValue('fields', fields)

    return this
  }

  serialize(): SerializedAction {
    return {
      ...this.data,
      name: this.name,
      fields: this.data.fields.map(field => field.serialize()),
      ...this.showHideField
    }
  }
}

export const action = (name: string) => new Action(name)

export default Action
