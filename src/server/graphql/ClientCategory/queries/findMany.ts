import { queryField, nonNull, list } from 'nexus'

export const ClientCategoryFindManyQuery = queryField(
  'findManyClientCategory',
  {
    type: nonNull(list(nonNull('ClientCategory'))),
    args: {
      where: 'ClientCategoryWhereInput',
      orderBy: list('ClientCategoryOrderByInput'),
      cursor: 'ClientCategoryWhereUniqueInput',
      distinct: 'ClientCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.clientCategory.findMany({
        ...args,
        ...select,
      })
    },
  },
)
