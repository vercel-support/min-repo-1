import { queryField, nonNull } from 'nexus'

export const SecuritiesFindUniqueQuery = queryField('findUniqueSecurities', {
  type: 'Securities',
  args: {
    where: nonNull('SecuritiesWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.securities.findUnique({
      where,
      ...select,
    })
  },
})
