import { mutationField, nonNull } from 'nexus'

export const CampaignMemberUpdateOneMutation = mutationField(
  'updateOneCampaignMember',
  {
    type: nonNull('CampaignMember'),
    args: {
      where: nonNull('CampaignMemberWhereUniqueInput'),
      data: nonNull('CampaignMemberUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.campaignMember.update({
        where,
        data,
        ...select,
      })
    },
  },
)
