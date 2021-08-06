import { queryField, nonNull } from 'nexus'

export const OwnershipFindUniqueQuery = queryField('findUniqueOwnership', {
  type: 'Ownership',
  args: {
    where: nonNull('OwnershipWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.ownership.findUnique({
      where,
      ...select,
    })
  },
})
