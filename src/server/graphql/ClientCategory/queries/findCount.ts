import { queryField, nonNull, list } from 'nexus'

export const ClientCategoryFindCountQuery = queryField(
  'findManyClientCategoryCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ClientCategoryWhereInput',
      orderBy: list('ClientCategoryOrderByInput'),
      cursor: 'ClientCategoryWhereUniqueInput',
      distinct: 'ClientCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.clientCategory.count(args as any)
    },
  },
)
