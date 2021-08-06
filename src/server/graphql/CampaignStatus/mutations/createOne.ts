import { mutationField, nonNull } from 'nexus'

export const CampaignStatusCreateOneMutation = mutationField(
  'createOneCampaignStatus',
  {
    type: nonNull('CampaignStatus'),
    args: {
      data: nonNull('CampaignStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.campaignStatus.create({
        data,
        ...select,
      })
    },
  },
)
