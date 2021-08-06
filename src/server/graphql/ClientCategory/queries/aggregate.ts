import { queryField, list } from 'nexus'

export const ClientCategoryAggregateQuery = queryField(
  'aggregateClientCategory',
  {
    type: 'AggregateClientCategory',
    args: {
      where: 'ClientCategoryWhereInput',
      orderBy: list('ClientCategoryOrderByInput'),
      cursor: 'ClientCategoryWhereUniqueInput',
      distinct: 'ClientCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.clientCategory.aggregate({ ...args, ...select }) as any
    },
  },
)
