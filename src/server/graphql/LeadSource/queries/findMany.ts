import { queryField, nonNull, list } from 'nexus'

export const LeadSourceFindManyQuery = queryField('findManyLeadSource', {
  type: nonNull(list(nonNull('LeadSource'))),
  args: {
    where: 'LeadSourceWhereInput',
    orderBy: list('LeadSourceOrderByInput'),
    cursor: 'LeadSourceWhereUniqueInput',
    distinct: 'LeadSourceScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leadSource.findMany({
      ...args,
      ...select,
    })
  },
})
