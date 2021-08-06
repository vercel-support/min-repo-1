import { queryField, nonNull } from 'nexus'

export const HomeOwnershipFindUniqueQuery = queryField(
  'findUniqueHomeOwnership',
  {
    type: 'HomeOwnership',
    args: {
      where: nonNull('HomeOwnershipWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.homeOwnership.findUnique({
        where,
        ...select,
      })
    },
  },
)
