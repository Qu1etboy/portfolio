import { getNotionClient, getDatabaseId } from "./notionClient";
import { getPlainText, getPostDate } from "./utils";
import {
  type GetDatabaseResponse,
  type QueryDatabaseParameters,
} from "@notionhq/client/build/src/api-endpoints";

// Get metadata of the database eg. title, date
// returns the database object as response
export async function getTableHeader(): Promise<
  GetDatabaseResponse | undefined
> {
  try {
    const databaseId = getDatabaseId();
    const notion = getNotionClient();
    const response = await notion.databases.retrieve({
      database_id: databaseId,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

type tableProps = {
  includeDraft?: boolean;
};

// Takes props for filtering options
// Returns contents in the database
// by default, it does not include the draft posts
export async function getTableData(
  props: tableProps = { includeDraft: false }
) {
  try {
    const { includeDraft } = props;
    const databaseId = getDatabaseId();
    const notion = getNotionClient();

    // this filters out the draft posts by default
    const queryObj: QueryDatabaseParameters = {
      database_id: databaseId,
      ...(!includeDraft && {
        filter: {
          property: "draft",
          checkbox: {
            does_not_equal: true,
          },
        },
      }),
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    };

    const response = await notion.databases.query(queryObj);
    const cleanedData = cleanTableData(response.results);
    return cleanedData;
  } catch (error) {
    console.error(error);
  }
}

type pageMetaData = {
  id: string;
  url: string;
  date: {
    created: string;
    edited: string;
  };
  properties: {
    title: string;
    slug: string;
  };
};

function cleanTableData(data: any): pageMetaData[] | [] {
  if (!data) {
    return [];
  }

  const cleanedData = data.map((page: any): pageMetaData => {
    const { id, created_time, last_edited_time, properties, url } = page;

    return {
      id,
      url,
      date: getPostDate(created_time, last_edited_time, properties?.date),
      properties: {
        title: getPlainText(properties?.title),
        slug: getPlainText(properties?.slug),
      },
    };
  });

  return cleanedData;
}

export async function getPageHeader(pageId: string) {
  try {
    const notion = getNotionClient();
    const pageHeader: any = await notion.pages.retrieve({
      page_id: pageId,
    });

    const { id, created_time, last_edited_time, properties, url } = pageHeader;

    return {
      id,
      url,
      date: getPostDate(created_time, last_edited_time, properties?.date),
      properties: {
        title: getPlainText(properties?.title),
        slug: getPlainText(properties?.slug),
      },
    };
  } catch (error) {
    console.error(error);
  }
}
