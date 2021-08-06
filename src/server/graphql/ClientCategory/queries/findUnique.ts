import { queryField, nonNull } from 'nexus'

export const ClientCategoryFindUniqueQuery = queryField(
  'findUniqueClientCategory',
  {
    type: 'ClientCategory',
    args: {
      where: nonNull('ClientCategoryWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.clientCategory.findUnique({
        where,
        ...select,
      })
    },
  },
)
