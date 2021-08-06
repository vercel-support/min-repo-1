import { mutationField, nonNull } from 'nexus'

export const LeadSourceCreateOneMutation = mutationField(
  'createOneLeadSource',
  {
    type: nonNull('LeadSource'),
    args: {
      data: nonNull('LeadSourceCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.leadSource.create({
        data,
        ...select,
      })
    },
  },
)
