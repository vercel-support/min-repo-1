import { queryField, nonNull, list } from 'nexus'

export const LeadSourceFindCountQuery = queryField('findManyLeadSourceCount', {
  type: nonNull('Int'),
  args: {
    where: 'LeadSourceWhereInput',
    orderBy: list('LeadSourceOrderByInput'),
    cursor: 'LeadSourceWhereUniqueInput',
    distinct: 'LeadSourceScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.leadSource.count(args as any)
  },
})
