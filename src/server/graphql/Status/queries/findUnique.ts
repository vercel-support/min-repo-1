import { queryField, nonNull } from 'nexus'

export const StatusFindUniqueQuery = queryField('findUniqueStatus', {
  type: 'Status',
  args: {
    where: nonNull('StatusWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.status.findUnique({
      where,
      ...select,
    })
  },
})
