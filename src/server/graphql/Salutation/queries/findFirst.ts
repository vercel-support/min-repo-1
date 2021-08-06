import { queryField, list } from 'nexus'

export const SalutationFindFirstQuery = queryField('findFirstSalutation', {
  type: 'Salutation',
  args: {
    where: 'SalutationWhereInput',
    orderBy: list('SalutationOrderByInput'),
    cursor: 'SalutationWhereUniqueInput',
    distinct: 'SalutationScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.salutation.findFirst({
      ...args,
      ...select,
    })
  },
})
