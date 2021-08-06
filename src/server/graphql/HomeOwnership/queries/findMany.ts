import { queryField, nonNull, list } from 'nexus'

export const HomeOwnershipFindManyQuery = queryField('findManyHomeOwnership', {
  type: nonNull(list(nonNull('HomeOwnership'))),
  args: {
    where: 'HomeOwnershipWhereInput',
    orderBy: list('HomeOwnershipOrderByInput'),
    cursor: 'HomeOwnershipWhereUniqueInput',
    distinct: 'HomeOwnershipScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.homeOwnership.findMany({
      ...args,
      ...select,
    })
  },
})
