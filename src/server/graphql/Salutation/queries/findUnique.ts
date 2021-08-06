import { queryField, nonNull } from 'nexus'

export const SalutationFindUniqueQuery = queryField('findUniqueSalutation', {
  type: 'Salutation',
  args: {
    where: nonNull('SalutationWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.salutation.findUnique({
      where,
      ...select,
    })
  },
})
