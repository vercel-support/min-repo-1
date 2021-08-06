import { queryField, nonNull, list } from 'nexus'

export const SalutationFindManyQuery = queryField('findManySalutation', {
  type: nonNull(list(nonNull('Salutation'))),
  args: {
    where: 'SalutationWhereInput',
    orderBy: list('SalutationOrderByInput'),
    cursor: 'SalutationWhereUniqueInput',
    distinct: 'SalutationScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.salutation.findMany({
      ...args,
      ...select,
    })
  },
})
