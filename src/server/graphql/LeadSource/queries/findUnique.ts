import { queryField, nonNull } from 'nexus'

export const LeadSourceFindUniqueQuery = queryField('findUniqueLeadSource', {
  type: 'LeadSource',
  args: {
    where: nonNull('LeadSourceWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.leadSource.findUnique({
      where,
      ...select,
    })
  },
})
