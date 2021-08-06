import { queryField, list } from 'nexus'

export const ClientCategoryFindFirstQuery = queryField(
  'findFirstClientCategory',
  {
    type: 'ClientCategory',
    args: {
      where: 'ClientCategoryWhereInput',
      orderBy: list('ClientCategoryOrderByInput'),
      cursor: 'ClientCategoryWhereUniqueInput',
      distinct: 'ClientCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.clientCategory.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
