import { queryField, list } from 'nexus'

export const HomeOwnershipFindFirstQuery = queryField(
  'findFirstHomeOwnership',
  {
    type: 'HomeOwnership',
    args: {
      where: 'HomeOwnershipWhereInput',
      orderBy: list('HomeOwnershipOrderByInput'),
      cursor: 'HomeOwnershipWhereUniqueInput',
      distinct: 'HomeOwnershipScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.homeOwnership.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
