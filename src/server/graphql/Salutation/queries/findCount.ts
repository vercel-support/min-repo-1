import { queryField, nonNull, list } from 'nexus'

export const SalutationFindCountQuery = queryField('findManySalutationCount', {
  type: nonNull('Int'),
  args: {
    where: 'SalutationWhereInput',
    orderBy: list('SalutationOrderByInput'),
    cursor: 'SalutationWhereUniqueInput',
    distinct: 'SalutationScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.salutation.count(args as any)
  },
})
