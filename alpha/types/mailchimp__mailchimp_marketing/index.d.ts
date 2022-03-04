// Type definitions for @mailchimp/mailchimp_marketing 3.0
// Project: https://github.com/mailchimp/mailchimp-client-lib-codegen
// Definitions by: Jan Müller <https://github.com/rattkin>
//                 Jérémy Barbet <https://github.com/jeremybarbet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@mailchimp/mailchimp_marketing' {

  export function setConfig(config: Config): void;

  export interface Config {
      apiKey?: string | undefined;
      accessToken?: string | undefined;
      server?: string | undefined;
  }

  export interface Options {
      skipMergeValidation: boolean;
  }

  export type Status = 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending' | 'transactional';

  export interface Body {
      status?: Status | undefined;
      email_type?: string | undefined;
      merge_fields?: Record<string, any> | undefined;
      interests?: Record<string, any> | undefined;
      language?: string | undefined;
      vip?: boolean | undefined;
      location?:
          | {
                lat: number;
                lon: number;
            }
          | undefined;
      marketing_permissions?:
          | Array<{
                marketing_permission_id: string;
                enabled: boolean;
            }>
          | undefined;
      ip_signup?: string | undefined;
      timestamp_signup?: string | undefined;
      ip_opt?: string | undefined;
      timestamp_opt?: string | undefined;
  }

  export interface AddListMemberBody extends Body {
      email_address: string;
      tags?: string[] | undefined;
  }

  export interface UpdateListMemberBody extends Body {
      email_address?: string | undefined;
  }

  export interface SetListMemberBody {
      email_address: string;
      status_if_new: Status;
      merge_fields?: Record<string, any> | undefined;
  }

  export namespace root {
    // https://mailchimp.com/developer/marketing/api/root/list-api-root-resources/
    function getRoot(
      fields?: string[],
      exculde_fields?: string[]
    ): Promise<void>
  }

  export namespace accountExports {
    // https://mailchimp.com/developer/marketing/api/account-exports/list-account-exports/
    function listAccountExports(
      fields?: string[],
      exculde_fields?: string[],
      count?: number,
      offset?: number
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/account-exports/add-export/
    function createAccountExport(
      include_stages: string[],
      since_timestamp?: string
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/account-exports/get-account-export-info/
    function getAccountExports(
      export_id: string,
      fields?: string[],
      exculde_fields?: string[]
    ): Promise<void>
  }

  export interface AddAutomationRecipients {
    list_id?: string
    store_id?: string
  }

  export namespace authorizedApps {
    // https://mailchimp.com/developer/marketing/api/authorized-apps/list-authorized-apps/
    function list(
      fields?: string[],
      exculde_fields?: string[],
      count?: number,
      offset?: number
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/authorized-apps/get-authorized-app-info/
    function get(
      app_id: string,
      fields?: string[],
      exculde_fields?: string[]
    ): Promise<void>
  }

  export namespace automations {
    // https://mailchimp.com/developer/marketing/api/automation/list-automations/
    function list(
      count?: number,
      offset?: number,
      fields?: string[],
      exculde_fields?: string[],
      before_create_time?: string,
      since_create_time?: string,
      before_start_time?: string,
      since_start_time?: string,
      status?: string
    )

    // https://mailchimp.com/developer/marketing/api/automation/add-automation/
    function create(
      recipients: {
        list_id?: string
        store_id?: string
      },
      trigger_settings: {
        workflow_type: string
      },
      settings?: {
        from_name?: string
        reply_to?: string
      }
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/automation/get-automation-info/
    function get(
      workflow_id: string,
      fields?: string[],
      exculde_fields?: string[]
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/automation/start-automation-emails/
    function startAllEmails(
      workflow_id: string
    ): Promise<void>

    // https://mailchimp.com/developer/marketing/api/automation/pause-automation-emails/
    function pauseAllEmails(
      workflow_id: string
    )

    // https://mailchimp.com/developer/marketing/api/automation/archive-automation/
    function archive(
      workflow_id: string
    )

    // https://mailchimp.com/developer/marketing/api/automation-email/list-automated-emails/
    function listAllWorkflowEmails(
      workflow_id: string
    )


  }

  /*~ If there are types, properties, or methods inside dotted names
   *~ of the module, declare them inside a 'namespace'.
   */
  export namespace lists {
      /*~ For example, given this definition, someone could write:
       *~   import { subProp } from 'yourModule';
       *~   subProp.foo();
       *~ or
       *~   import * as yourMod from 'yourModule';
       *~   yourMod.subProp.foo();
       */
      function setListMember(
          listId: string,
          subscriberHash: string,
          body: SetListMemberBody,
          opts?: Options,
      ): Promise<void>;

      function getListMember(listId: string, subscriberHash: string, opts?: Options): Promise<void>;

      function addListMember(listId: string, body: AddListMemberBody, opts?: Options): Promise<void>;

      function updateListMember(
          listId: string,
          subscriberHash: string,
          body: UpdateListMemberBody,
          opts?: Options,
      ): Promise<void>;

      function deleteListMemberPermanent(listId: string, subscriberHash: string): Promise<void>;
  }

  export namespace ping {
      function get(): Promise<void>;
  }

}
