import { queryField, list } from 'nexus'

export const LeadSourceFindFirstQuery = queryField('findFirstLeadSource', {
  type: 'LeadSource',
  args: {
    where: 'LeadSourceWhereInput',
    orderBy: list('LeadSourceOrderByInput'),
    cursor: 'LeadSourceWhereUniqueInput',
    distinct: 'LeadSourceScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.leadSource.findFirst({
      ...args,
      ...select,
    })
  },
})
